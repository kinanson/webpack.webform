import './index.scss';
import ajaxData from './ajaxData';
import manPng from './img/man.png';

$(function(){
    console.log(process.env.API_URL);
    let $app = $('#app');

    let iteratorList = `
    <table class ="table">
            <tr class="table-title">
                <th>id</td>
                <th>name</td>
                <th>gender</td>
            </tr>
    `;

    ajaxData.list.forEach(item=> {
        iteratorList += `
         <tr>
                <td>${item.id}</td>
                <td>${item.name}</td>
                <td>${getGender(item.gender)}</td>
            </tr>
        `
    });

    //多增加新的方法，來決定要回傳哪張圖片，這邊也可以定義import的方式，manPng是我上面定義的變數
    function getGender(gender){
        if(gender==='body'){
            return `<img src="${manPng}"/>`
        }
        return `<img src="${require('./img/woman.png')}"/>`
    }


    iteratorList += '</table>';

    $app.html(iteratorList);
});

