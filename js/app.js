let ts=Date.now();
pubkey='eac1bb7873a8d149b6a878df4f4030c9';
pvtkey='83289f45aebb2bb8b7f0ef9f88252bfd87712c81';
let hash = CryptoJS.MD5(ts+pvtkey+pubkey).toString();

let url = `https://gateway.marvel.com:443/v1/public/characters?name=lobezno&ts=${ts}&apikey=${pubkey}&hash=${hash}`;

fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))



let urlComic=`https://gateway.marvel.com:443/v1/public/comics?title=mystyque&ts=${ts}&apikey=${pubkey}&hash=${hash}`;

async function getMarvelComic(){
    try{
        let response=await fetch(url);
        let data= await response.json();
        console.log(data);
    }catch(error){
        console.error('Error:',error);
    }
}
getMarvelComic();
