# NX E-commerce project

Todo for README:

- [ ] Preview
- [ ] Finish Stack section (add Deploy)

## About

I can describe this as an exhausting experience.<br/>
Make monorepo with Strapi (with Graphql) – definitely a pain in an ass, but making it type-safe (typescript) is something on a spiritual level.<br/>
But the most pleasantly part – tweak/config everything (like seriously everything) to make it work with NX.<br/>
If I knew that before, I would go for the T3 stack:<br>TypeScript, Next.js, tRPC, Prisma, Tailwind.

## Stack

**Core:** NX, Typescript;

**Front:** NextJS, Storybook, React Query, Jotai;

**Style:** Windicss (`clsx`*);<br/>
*lovely and faster alternative to `classnames`.

**Back:** Strapi with Graphql (`codegen`, `graphql-request`);

**Testing:** React Testing Library / Jest, Cypress.

## Local setup guide

First of all run – `npm ci`.

### Back (Strapi)

1. Build: `npm run docker-build`.
2. Run: `npm run docker`

**STRAPI DEV USER:**
| User | Password |
| ----- | -------- |
| fake@not_exist_mail.com | Deve1oper |

### Front (NextJS)

Running back end instance is mandatory!

```bash
npm run local-nextjs
# or
nx run nx-ecommerce:serve:development
```
