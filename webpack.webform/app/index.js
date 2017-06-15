import './index.scss';
import ajaxData from './ajaxData';

$(function(){
    
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
                <td>${item.gender}</td>
            </tr>
        `
    });


    iteratorList += '</table>';

    $app.html(iteratorList);
});

