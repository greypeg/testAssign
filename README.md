First clone the project:

git clone https://github.com/greypeg/testAssign.git

1)How to run the project:

Commands:

cd testAssign

npx prisma db push

npm run dev

in your browser paste this: http://localhost:3000/

2)To see if users are inside the db:
open another terminal

inside the project folder (you should be in the folder with name: testAssign) run this command:

npx prisma studio

it will open a browser window containg the list of models in this project.

Go to the User model you will see the users that you have created.


Notes:

you can proceed to any step using the step headers but the data in the forms will only update if you click the Next button on the right corner before proceeding to another step.

The User will be created (the data will be submitted to the db) when you hit the Next button on the last section ("Final comments") section.

If you are not familiar with the different technologies used in this project, please refer to the respective docs.

- [Next-Auth.js](https://next-auth.js.org)
- [Prisma](https://prisma.io)
- [TailwindCSS](https://tailwindcss.com)
- [tRPC](https://trpc.io)

What would I improve in this project?

Divide the Collapsable.tsx in minor files and components