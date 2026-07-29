import { csv } from 'd3-fetch'

const data = await csv('./data/my.csv') as [{ID:string,Name:string,Score:number}]

const csvTable = window.document.getElementById('csv-table') as HTMLTableElement
const csvRowTemplate = window.document.getElementById('csv-table-row-template') as HTMLTemplateElement

data.forEach(row => {
    const rowClone = csvRowTemplate.content.cloneNode(true) as HTMLTableRowElement

    rowClone.querySelector('td:nth-child(1)').textContent = row.ID
    rowClone.querySelector('td:nth-child(2)').textContent = row.Name
    rowClone.querySelector('td:nth-child(3)').textContent = `${row.Score}`

    csvTable.tBodies[0].appendChild(rowClone)
})
