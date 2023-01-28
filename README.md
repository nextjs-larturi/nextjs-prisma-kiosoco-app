# Next Prisma Kiosco App

## Tienda online con carrito

### 🚀 Quick start

#### Instalar dependencias

```bash
npm install
```

#### Variables de entorno

```bash
Copiar las de .env.template y crear el archivo.env
```

#### Correr aplicación localmente

```bash
npm run dev
```

#### Prisma

#### Local

```bash
npx prisma migrate dev 
```

#### Prod

```bash
npx prisma studio
npx prisma db seed
npx prisma migrate resolve --applied "20220324151558_initial_deploy"
npx prisma db push
```

##### Made with ❤️ by Leandro Arturi
