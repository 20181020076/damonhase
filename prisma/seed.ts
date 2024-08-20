import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()


async function main() {
    
  // Insertar datos en la tabla 'users'
  await prisma.users.createMany({
    data: [
      { name: 'Bryan Coy', email: 'bryan@damonhase.com', password: '123123123', rol:"PERRA" },
      { name: 'Diego Rojas', email: 'diego@damonhase.com', password: '123123123', rol:"ADMIN"}, 
      { name: 'Pepe Garzon', email: 'garzan@gmail.com', password: '123123123'}
      
    ],
  });
  await prisma.category.createMany({
    data: [
      { name: 'DEMON' },
      { name: 'BUNNY' },
      { name: 'CAT' },
      { name: 'BEAR' },
      { name: 'GALLINA' },
    ],
  });

  // Insertar datos en la tabla 'Product'
  await prisma.product.createMany({
    data: [
      {
        id:"1",
        name: 'Purple Bunny',
        description: 'Conejo morado',
        primaryColors: ['red', 'blue'],
        secondaryColors: [],
        image: 'purpleBunny.jpeg',
        stock: 4,
        price: 200000,
        
      },
      {
        id:"2",
        name: 'Cremallera Demon',
        description: 'Cremallera en los ojos',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'whiteDemon.jpeg',
        stock: 3,
        price: 180000,
        

      },
      {
        id:"3",
        name: 'Cabra Demon',
        description: 'Cabra demoníaca',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'blackCabra.jpeg',
        stock: 3,
        price: 180000,
       

      },
      {
        id:"4",
        name: 'Skull Bunny Demon',
        description: 'Bunny con calavera demoníaca',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'redBunny.jpeg',
        stock: 3,
        price: 180000,
        

      },
      {
        id:"5",
        name: 'Malla Bunny',
        description: 'Bunny con malla',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'mallaBunny.jpeg',
        stock: 3,
        price: 180000,
        

      },
      {
        id:"6",
        name: 'Furius Cat',
        description: 'Gato furioso',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'catSimple.jpeg',
        stock: 3,
        price: 180000,
        

      },
      {
        id:"7",
        name: 'Skull Demon',
        description: 'harry plones ta re loco',
        primaryColors: ['green', 'yellow', "black"],
        secondaryColors: ['black', 'pink'],
        image: 'skullDemon.jpeg',
        stock: 3,
        price: 230000,
        

      },
      {
        id:"8",
        name: 'La Gallina',
        description: 'gallina demoníaca amarilla',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'gallina.jpeg',
        stock: 3,
        price: 230000,
        

      },
      {
        id:"9",
        name: 'Yellow Cabra Demon',
        description: 'Cabra demoníaca amarilla',
        primaryColors: ['green', 'yellow'],
        secondaryColors: ['black', 'pink'],
        image: 'yellowCabra.jpeg',
        stock: 3,
        price: 230000,
        

      },
    ],
  });
  await prisma.productCategory.createMany({
    data: [
      {
        productId:"1",
        categoryId:"BUNNY"

      },
      {
        productId:"2",
        categoryId:"DEMON"

      },
      {
        productId:"3",
        categoryId:"DEMON"

      },
      {
        productId:"4",
        categoryId:"DEMON"

      },
      {
        productId:"4",
        categoryId:"BUNNY"

      },
      {
        productId:"5",
        categoryId:"BUNNY"

      },
      {
        productId:"6",
        categoryId:"CAT"

      },
      {
        productId:"7",
        categoryId:"DEMON"

      },
      {
        productId:"8",
        categoryId:"GALLINA"

      },
    ]});

  console.log('Seed data inserted');
}

main()
  .catch(e => {
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });