1)How to run the project:

Commands:

cd test

npx prisma db push

npm run dev

in your browser paste this: http://localhost:3000/

2)To see if users are inside the db:

inside the project folder (test) run this command:

npx prisma studio

it will open a browser window containg the list of models in this project.

Go to the User model you will see the users that you have created.


If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

What would I improve in this project?

Divide the Collapsable.tsx in minor files and components