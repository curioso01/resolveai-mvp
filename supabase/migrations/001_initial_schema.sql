-- Profiles (extensão de auth.users)
create table public.profiles (
  id uuid references auth.users(id) on delete cascade primary key,
  role text not null check (role in ('cliente', 'prestador', 'admin')),
  display_name text not null,
  city text,
  created_at timestamptz default now()
);

-- Provider profiles
create table public.provider_profiles (
  id uuid primary key default gen_random_uuid(),
  user_id uuid references public.profiles(id) on delete cascade,
  bio text,
  rating numeric(3,2) default 0,
  verified boolean default false,
  created_at timestamptz default now()
);

-- Categories
create table public.categories (
  id text primary key,
  label text not null,
  price_from numeric(10,2) not null
);

-- Services
create table public.services (
  id uuid primary key default gen_random_uuid(),
  provider_id uuid references public.provider_profiles(id),
  title text not null,
  category_id text references public.categories(id),
  base_price numeric(10,2) not null,
  created_at timestamptz default now()
);

-- Service requests
create table public.service_requests (
  id uuid primary key default gen_random_uuid(),
  client_id uuid references public.profiles(id),
  provider_id uuid references public.provider_profiles(id),
  service_id uuid references public.services(id),
  description text not null,
  address text,
  city text,
  scheduled_for timestamptz,
  status text not null default 'aguardando_aceite',
  created_at timestamptz default now()
);

-- Bookings
create table public.bookings (
  id uuid primary key default gen_random_uuid(),
  request_id uuid references public.service_requests(id),
  amount numeric(10,2) not null,
  status text not null default 'pendente_pagamento',
  payment_status text not null default 'pendente',
  created_at timestamptz default now()
);

-- Reviews
create table public.reviews (
  id uuid primary key default gen_random_uuid(),
  booking_id uuid references public.bookings(id),
  client_id uuid references public.profiles(id),
  provider_id uuid references public.provider_profiles(id),
  rating integer check (rating between 1 and 5),
  comment text,
  created_at timestamptz default now()
);

-- RLS
alter table public.profiles enable row level security;
alter table public.service_requests enable row level security;
alter table public.bookings enable row level security;
alter table public.reviews enable row level security;

-- Policies básicas
create policy "Usuário vê próprio perfil" on public.profiles
  for select using (auth.uid() = id);

create policy "Cliente vê próprias solicitações" on public.service_requests
  for select using (auth.uid() = client_id);

create policy "Cliente insere solicitações" on public.service_requests
  for insert with check (auth.uid() = client_id);

-- Trigger: criar profile automaticamente ao registrar
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.profiles (id, role, display_name)
  values (new.id, new.raw_user_meta_data->>'role', new.raw_user_meta_data->>'name');
  return new;
end;
$$ language plpgsql security definer;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();
