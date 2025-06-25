import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Started Seeding...')

    let rolesToCreate = [
        { name: 'ADMIN' },
        { name: 'USER' },
    ]

    for (const role of rolesToCreate) {
        const exsistingRole = await prisma.roles.findUnique({
            where: { name: role.name }
        });
        if (!exsistingRole) {
            await prisma.roles.create({
                data: role
            })
            console.log(`Created role: ${role.name}`)
            console.log('------------------------------------')
        } else {
            console.log(`Role: ${role.name} already exists`)
            console.log('------------------------------------')
        }
    }
    console.log('Finished Seeding...')
}

main()
    .catch((e) => {
        console.error('Fehler beim Seeding: ', e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })