import type { Restaurant } from "../models/restaurant";
import { DISHES_IMAGES, RESTAURANT_IMAGES } from "../models/images";

export const restaurantsMock: Restaurant[] = [
  {
    id: 1,
    name: "Hioki Sushi ",
    image: RESTAURANT_IMAGES.sushi,
    category: "Japonesa",
    info: ["Destaques da semana", "Japonesa"],
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    pratos: [
      {
        id: 1,
        name: "Nigiri de Salmão",
        image: DISHES_IMAGES.sushi[1],
        description:
          "Nigiri clássico com fatia de salmão fresco sobre arroz temperado. Textura macia, sabor equilibrado e apresentação delicada — perfeito como entrada ou peça principal em um combo de sushis.",
      },
      {
        id: 2,
        name: "Uramaki de Salmão e Abacate",
        image: DISHES_IMAGES.sushi[2],
        description:
          "Uramaki recheado com salmão fresco e fatias de abacate cremoso, arroz temperado e toque cítrico no molho. Combinação fresca e aveludada, com corte e apresentação cuidadosos.",
      },
      {
        id: 3,
        name: "Uramaki Crocante de Legumes",
        image: DISHES_IMAGES.sushi[3],
        description:
          "Rolo com legumes salteados e toque de maionese oriental, finalizado com crocância por cima. Equilíbrio entre textura crocante e recheio suculento — ótimo como acompanhamento ou petisco.",
      },
      {
        id: 1,
        name: "Nigiri de Salmão",
        image: DISHES_IMAGES.sushi[1],
        description:
          "Nigiri clássico com fatia de salmão fresco sobre arroz temperado. Textura macia, sabor equilibrado e apresentação delicada — perfeito como entrada ou peça principal em um combo de sushis.",
      },
      {
        id: 2,
        name: "Uramaki de Salmão e Abacate",
        image: DISHES_IMAGES.sushi[2],
        description:
          "Uramaki recheado com salmão fresco e fatias de abacate cremoso, arroz temperado e toque cítrico no molho. Combinação fresca e aveludada, com corte e apresentação cuidadosos.",
      },
      {
        id: 3,
        name: "Uramaki Crocante de Legumes",
        image: DISHES_IMAGES.sushi[3],
        description:
          "Rolo com legumes salteados e toque de maionese oriental, finalizado com crocância por cima. Equilíbrio entre textura crocante e recheio suculento — ótimo como acompanhamento ou petisco.",
      },
    ],
  },
  {
    id: 2,
    name: "La Dolce Vita Trattoria",
    image: RESTAURANT_IMAGES.pasta,
    category: "Italiana",
    info: ["Italiana"],
    rating: "4.6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    pratos: [
      {
        id: 1,
        name: "Pizza de Atum, Cebola Roxa e Azeitonas",
        image: DISHES_IMAGES.pasta[1],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 2,
        name: "Pizza Napoletana",
        image: DISHES_IMAGES.pasta[3],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 3,
        name: "Trio Degustação de Massas Cremosas",
        image: DISHES_IMAGES.pasta[2],
        description:
          "Degustação de massas curtas com três molhos exclusivos: cogumelos, cremoso de queijo e um toque de abóbora. Servido com pão de alho fresco. Sabores intensos e autênticos.",
      },
      {
        id: 1,
        name: "Pizza de Atum, Cebola Roxa e Azeitonas",
        image: DISHES_IMAGES.pasta[1],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 2,
        name: "Pizza Napoletana",
        image: DISHES_IMAGES.pasta[3],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 3,
        name: "Trio Degustação de Massas Cremosas",
        image: DISHES_IMAGES.pasta[2],
        description:
          "Degustação de massas curtas com três molhos exclusivos: cogumelos, cremoso de queijo e um toque de abóbora. Servido com pão de alho fresco. Sabores intensos e autênticos.",
      },
    ],
  },
  {
    id: 3,
    name: "Casa da carte",
    image: RESTAURANT_IMAGES.steak,
    category: "Churrasco",
    info: ["Churrasco"],
    rating: "4.9",
    description:
      "A Churrascaria do Sabor leva a autêntica experiência do churrasco brasileiro até você! Desfrute de cortes suculentos na brasa, picanha macia, costela desmanchando e acompanhamentos caseiros, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    pratos: [
      {
        id: 1,
        name: "Bife Grelhado com Tortilla",
        image: DISHES_IMAGES.steak[1],
        description:
          "Dois bifes suculentos e temperados sobre tortilla macia. Acompanha arroz, molho apimentado, cebola roxa e tomate. Um prato rústico e saboroso. Farto e completo.",
      },
      {
        id: 2,
        name: "Carnes Coreanas Marinadas",
        image: DISHES_IMAGES.steak[2],
        description:
          "Seleção de três cortes de carne (costelinha, frango e tiras) marinados em temperos coreanos únicos. Ideal para preparo na chapa. Sabores intensos e autênticos.",
      },
      {
        id: 3,
        name: "Steak de Contrafilé com Alecrim",
        image: DISHES_IMAGES.steak[3],
        description:
          "Cortes premium de contrafilé grelhado no ponto perfeito. Acompanha alho, sal rosa e alecrim fresco. Foco total na qualidade da carne. Uma experiência sofisticada.",
      },
      {
        id: 1,
        name: "Bife Grelhado com Tortilla",
        image: DISHES_IMAGES.steak[1],
        description:
          "Dois bifes suculentos e temperados sobre tortilla macia. Acompanha arroz, molho apimentado, cebola roxa e tomate. Um prato rústico e saboroso. Farto e completo.",
      },
      {
        id: 2,
        name: "Carnes Coreanas Marinadas",
        image: DISHES_IMAGES.steak[2],
        description:
          "Seleção de três cortes de carne (costelinha, frango e tiras) marinados em temperos coreanos únicos. Ideal para preparo na chapa. Sabores intensos e autênticos.",
      },
      {
        id: 3,
        name: "Steak de Contrafilé com Alecrim",
        image: DISHES_IMAGES.steak[3],
        description:
          "Cortes premium de contrafilé grelhado no ponto perfeito. Acompanha alho, sal rosa e alecrim fresco. Foco total na qualidade da carne. Uma experiência sofisticada.",
      },
    ],
  },
  {
    id: 1,
    name: "Hioki Sushi ",
    image: RESTAURANT_IMAGES.sushi,
    category: "Japonesa",
    info: ["Destaques da semana", "Japonesa"],
    rating: "4.9",
    description:
      "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!",
    pratos: [
      {
        id: 1,
        name: "Nigiri de Salmão",
        image: DISHES_IMAGES.sushi[1],
        description:
          "Nigiri clássico com fatia de salmão fresco sobre arroz temperado. Textura macia, sabor equilibrado e apresentação delicada — perfeito como entrada ou peça principal em um combo de sushis.",
      },
      {
        id: 2,
        name: "Uramaki de Salmão e Abacate",
        image: DISHES_IMAGES.sushi[2],
        description:
          "Uramaki recheado com salmão fresco e fatias de abacate cremoso, arroz temperado e toque cítrico no molho. Combinação fresca e aveludada, com corte e apresentação cuidadosos.",
      },
      {
        id: 3,
        name: "Uramaki Crocante de Legumes",
        image: DISHES_IMAGES.sushi[3],
        description:
          "Rolo com legumes salteados e toque de maionese oriental, finalizado com crocância por cima. Equilíbrio entre textura crocante e recheio suculento — ótimo como acompanhamento ou petisco.",
      },
      {
        id: 1,
        name: "Nigiri de Salmão",
        image: DISHES_IMAGES.sushi[1],
        description:
          "Nigiri clássico com fatia de salmão fresco sobre arroz temperado. Textura macia, sabor equilibrado e apresentação delicada — perfeito como entrada ou peça principal em um combo de sushis.",
      },
      {
        id: 2,
        name: "Uramaki de Salmão e Abacate",
        image: DISHES_IMAGES.sushi[2],
        description:
          "Uramaki recheado com salmão fresco e fatias de abacate cremoso, arroz temperado e toque cítrico no molho. Combinação fresca e aveludada, com corte e apresentação cuidadosos.",
      },
      {
        id: 3,
        name: "Uramaki Crocante de Legumes",
        image: DISHES_IMAGES.sushi[3],
        description:
          "Rolo com legumes salteados e toque de maionese oriental, finalizado com crocância por cima. Equilíbrio entre textura crocante e recheio suculento — ótimo como acompanhamento ou petisco.",
      },
    ],
  },
  {
    id: 2,
    name: "La Dolce Vita Trattoria",
    image: RESTAURANT_IMAGES.pasta,
    category: "Italiana",
    info: ["Italiana"],
    rating: "4.6",
    description:
      "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    pratos: [
      {
        id: 1,
        name: "Pizza de Atum, Cebola Roxa e Azeitonas",
        image: DISHES_IMAGES.pasta[1],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 2,
        name: "Pizza Napoletana",
        image: DISHES_IMAGES.pasta[3],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 3,
        name: "Trio Degustação de Massas Cremosas",
        image: DISHES_IMAGES.pasta[2],
        description:
          "Degustação de massas curtas com três molhos exclusivos: cogumelos, cremoso de queijo e um toque de abóbora. Servido com pão de alho fresco. Sabores intensos e autênticos.",
      },
      {
        id: 1,
        name: "Pizza de Atum, Cebola Roxa e Azeitonas",
        image: DISHES_IMAGES.pasta[1],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 2,
        name: "Pizza Napoletana",
        image: DISHES_IMAGES.pasta[3],
        description:
          "Pizza tradicional de massa fina, recheada com atum, mussarela, cebola roxa e azeitonas pretas. Um clássico da culinária italiana. Sabor familiar e irresistível.",
      },
      {
        id: 3,
        name: "Trio Degustação de Massas Cremosas",
        image: DISHES_IMAGES.pasta[2],
        description:
          "Degustação de massas curtas com três molhos exclusivos: cogumelos, cremoso de queijo e um toque de abóbora. Servido com pão de alho fresco. Sabores intensos e autênticos.",
      },
    ],
  },
  {
    id: 3,
    name: "Casa da carte",
    image: RESTAURANT_IMAGES.steak,
    category: "Churrasco",
    info: ["Churrasco"],
    rating: "4.9",
    description:
      "A Churrascaria do Sabor leva a autêntica experiência do churrasco brasileiro até você! Desfrute de cortes suculentos na brasa, picanha macia, costela desmanchando e acompanhamentos caseiros, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
    pratos: [
      {
        id: 1,
        name: "Bife Grelhado com Tortilla",
        image: DISHES_IMAGES.steak[1],
        description:
          "Dois bifes suculentos e temperados sobre tortilla macia. Acompanha arroz, molho apimentado, cebola roxa e tomate. Um prato rústico e saboroso. Farto e completo.",
      },
      {
        id: 2,
        name: "Carnes Coreanas Marinadas",
        image: DISHES_IMAGES.steak[2],
        description:
          "Seleção de três cortes de carne (costelinha, frango e tiras) marinados em temperos coreanos únicos. Ideal para preparo na chapa. Sabores intensos e autênticos.",
      },
      {
        id: 3,
        name: "Steak de Contrafilé com Alecrim",
        image: DISHES_IMAGES.steak[3],
        description:
          "Cortes premium de contrafilé grelhado no ponto perfeito. Acompanha alho, sal rosa e alecrim fresco. Foco total na qualidade da carne. Uma experiência sofisticada.",
      },
      {
        id: 1,
        name: "Bife Grelhado com Tortilla",
        image: DISHES_IMAGES.steak[1],
        description:
          "Dois bifes suculentos e temperados sobre tortilla macia. Acompanha arroz, molho apimentado, cebola roxa e tomate. Um prato rústico e saboroso. Farto e completo.",
      },
      {
        id: 2,
        name: "Carnes Coreanas Marinadas",
        image: DISHES_IMAGES.steak[2],
        description:
          "Seleção de três cortes de carne (costelinha, frango e tiras) marinados em temperos coreanos únicos. Ideal para preparo na chapa. Sabores intensos e autênticos.",
      },
      {
        id: 3,
        name: "Steak de Contrafilé com Alecrim",
        image: DISHES_IMAGES.steak[3],
        description:
          "Cortes premium de contrafilé grelhado no ponto perfeito. Acompanha alho, sal rosa e alecrim fresco. Foco total na qualidade da carne. Uma experiência sofisticada.",
      },
    ],
  },
];
