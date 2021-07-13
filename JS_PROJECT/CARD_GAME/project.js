let cards=[
    
    {
        image:"https://tse2.mm.bing.net/th?id=OIF.rdi59kHGG4gSoCGjRcgJgg&pid=Api&P=0&w=300&h=300",
        status:"closed",
        value:1
    
    },
    {
        image:"https://tse1.mm.bing.net/th?id=OIP.mmt0_GhDPYw36N5SYFHHhgHaDt&pid=Api&P=0&w=385&h=193",
        status:"closed",
        value:2

    },
    {
        image:"https://tse1.mm.bing.net/th?id=OIP.O4CC7dNf85FtAWbQ9shS1gHaE7&pid=Api&P=0&w=257&h=172",
        status:"closed",
        value:3
    },
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.NrelIs7jJBducp2a7T4GNgHaEK&pid=Api&P=0&w=289&h=164",
        status:"closed",
        value:4

    },
    {
        image:"https://tse3.mm.bing.net/th?id=OIP.A5JMgFHfdS2CZ2TFaVZm4QHaE7&pid=Api&P=0&w=267&h=178",
        status:"closed",
        value:5

    },
    {
        image:"https://tse2.mm.bing.net/th?id=OIF.rdi59kHGG4gSoCGjRcgJgg&pid=Api&P=0&w=300&h=300",
        status:"closed",
        value:1
    },
    {
        image:"https://tse1.mm.bing.net/th?id=OIP.mmt0_GhDPYw36N5SYFHHhgHaDt&pid=Api&P=0&w=385&h=193",
        status:"closed",
        value:2

    },
    {
        image:"https://tse1.mm.bing.net/th?id=OIP.O4CC7dNf85FtAWbQ9shS1gHaE7&pid=Api&P=0&w=257&h=172",
        status:"closed",
        value:3
    },
    {
        image:"https://tse4.mm.bing.net/th?id=OIP.NrelIs7jJBducp2a7T4GNgHaEK&pid=Api&P=0&w=289&h=164",
        status:"closed",
        value:4

    },
    {
        image:"https://tse3.mm.bing.net/th?id=OIP.A5JMgFHfdS2CZ2TFaVZm4QHaE7&pid=Api&P=0&w=267&h=178",
        status:"closed",
        value:5

    }
];
// console.log(cards)

// let arr=[1,2,3,4,5]
// console.log(arr)

let temp="" ;
for(let i=cards.length-1;i>=0;i--){
    let j=Math.floor(Math.random()*(i+1));

    temp=cards[i];
    cards[i]=cards[j];
    cards[j]=temp;

}
// console.log(cards)

let cardsCopy=cards;

function displayCards(data){

    let cardsString="";

    data.forEach(function(card,index){
        cardsString+=`
            <div class="card" style="background-image:url('${card.image}')">
                <div class="overlay ${card.status}" onclick="openCard(${index})">
                </div>
            </div>
        `;
    });

    // cardsString= url(data[0].image)

    document.getElementById('cards').innerHTML=cardsString;
}

displayCards(cards);

let val1=null,val2=null;
let cardCount=1;
let score=0;

function openCard(index){
    
    console.log(cards)

    cards[index].status="opened";
    if(cardCount===1){
        val1=cards[index].value;
        cardCount++;
    }
    else if(cardCount===2){
        val2=cards[index].value;
        
        if (val1===val2){
            score=score+1;
            document.getElementById("score").innerText=score;
            val1=null;
            val2=null;
            cardCount=1;
        }

        else{
           
            alert("GAME OVER!!! ");
            location.reload();
            

        }
    }
    

    displayCards(cards);
    // console.log(index)

}