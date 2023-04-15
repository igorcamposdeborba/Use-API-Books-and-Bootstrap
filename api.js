const baseUrl = "https://hapi-books.p.rapidapi.com/month/2022/12"; // endpoint da api de livros

const backupInitialState = { list: [ 
    {
      "book_id": "58283080",
      "position": "1",
      "name": "Hook, Line, and Sinker (Bellinger Sisters, #2)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627068858i/58283080.jpg",
      "rating": 4.12,
      "url": "https://www.goodreads.com/book/show/58283080-hook-line-and-sinker"
    },
    {
      "book_id": "58438583",
      "position": "2",
      "name": "One Italian Summer",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1626799802i/58438583.jpg",
      "rating": 3.73,
      "url": "https://www.goodreads.com/book/show/58438583-one-italian-summer"
    },
    {
      "book_id": "58371432",
      "position": "3",
      "name": "The Book of Cold Cases",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1624553583i/58371432.jpg",
      "rating": 3.91,
      "url": "https://www.goodreads.com/book/show/58371432-the-book-of-cold-cases"
    },
    {
      "book_id": "58064046",
      "position": "4",
      "name": "Gallant",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635862579i/58064046.jpg",
      "rating": 3.9,
      "url": "https://www.goodreads.com/book/show/58064046-gallant"
    },
    {
      "book_id": "57815107",
      "position": "5",
      "name": "The War of Two Queens (Blood and Ash, #4)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1635174962i/57815107.jpg",
      "rating": 4.05,
      "url": "https://www.goodreads.com/book/show/57815107-the-war-of-two-queens"
    },
    {
      "book_id": "57693416",
      "position": "6",
      "name": "The Golden Couple",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1633973719i/57693416.jpg",
      "rating": 4.04,
      "url": "https://www.goodreads.com/book/show/57693416-the-golden-couple"
    },
    {
      "book_id": "55004093",
      "position": "7",
      "name": "The Cartographers",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1634915484i/55004093.jpg",
      "rating": 3.74,
      "url": "https://www.goodreads.com/book/show/55004093-the-cartographers"
    },
    {
      "book_id": "58490567",
      "position": "8",
      "name": "The Diamond Eye",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1641777418i/58490567.jpg",
      "rating": 4.35,
      "url": "https://www.goodreads.com/book/show/58490567-the-diamond-eye"
    },
    {
      "book_id": "57693427",
      "position": "9",
      "name": "The Night Shift",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1639384101i/57693427.jpg",
      "rating": 4.03,
      "url": "https://www.goodreads.com/book/show/57693427-the-night-shift"
    },
    {
      "book_id": "57007401",
      "position": "10",
      "name": "Dating Dr. Dil (If Shakespeare was an Auntie #1)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1642405300i/57007401.jpg",
      "rating": 3.82,
      "url": "https://www.goodreads.com/book/show/57007401-dating-dr-dil"
    },
    {
      "book_id": "58265135",
      "position": "11",
      "name": "The Unsinkable Greta James",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1627483702i/58265135.jpg",
      "rating": 3.97,
      "url": "https://www.goodreads.com/book/show/58265135-the-unsinkable-greta-james"
    },
    {
      "book_id": "58536005",
      "position": "12",
      "name": "The Club",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644230879i/58536005.jpg",
      "rating": 3.44,
      "url": "https://www.goodreads.com/book/show/58536005-the-club"
    },
    {
      "book_id": "56978089",
      "position": "13",
      "name": "A Magic Steeped in Poison (The Book of Tea, #1)",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1620317227i/56978089.jpg",
      "rating": 3.99,
      "url": "https://www.goodreads.com/book/show/56978089-a-magic-steeped-in-poison"
    },
    {
      "book_id": "58505877",
      "position": "14",
      "name": "Run Rose Run",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1628699768i/58505877.jpg",
      "rating": 4,
      "url": "https://www.goodreads.com/book/show/58505877-run-rose-run"
    },
    {
      "book_id": "57899793",
      "position": "15",
      "name": "All My Rage",
      "cover": "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1629908086i/57899793.jpg",
      "rating": 4.62,
      "url": "https://www.goodreads.com/book/show/57899793-all-my-rage"
    }
  ] 
} // cópia do banco de dados de livros para eu manipular localmente porque eu tenho um limite de requisições por dia na api (20 por dia e 100 por mês)


const imageGrid = document.getElementById('image-grid');

// GET - Obtém todos os produtos o coloca numa tabela
axios.get(baseUrl, {
    headers:  {
      'X-RapidAPI-Key': 'e724e89df4mshdf38b34ad98fa9ep192f94jsn007c59b72635',
      'X-RapidAPI-Host': 'hapi-books.p.rapidapi.com'
    }
}).then(response => { // requisição para resgatar dados do banco de dados da api de livros
    const productList = response.data;
    setProductTable(productList); // inserir produtos na lista de imagens

}).catch((error) => {
    const productListBackup = backupInitialState.list;
    setProductTable(productListBackup); // se eu for bloqueado porque atingi o limite de 20 requisições por dia e 100 por mês, busque o resultado json salvo anteriormente
});

// Inserir produtos na lista de imagens
function setProductTable(productList){
    let html = "";
    productList.forEach(item => {
      html += `<div class="card">
                  <a href="" data-toggle="modal" data-target="#card-modal-${item.book_id}">
                      <img src="${item.cover}" alt="${item.name}">
                  </a>
               </div>
               
               <div class="modal fade" id="card-modal-${item.book_id}" tabindex="-1" role="dialog">
                <div class="modal-dialog modal-dialog-centered modal-sm">
                  <div class="modal-content text-center">

                    <h2>${item.name}</h2>
                    <p>Nota (de 0 a 5): ${item.rating}</p>

                    <div>
                      <a href="${item.url}" target="_blank">
                        <button type="button" class="btn btn-info">Acessar livro</button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
               `;
    });

    imageGrid.innerHTML = html;
}