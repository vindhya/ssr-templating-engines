const tableSection = document.getElementById('table-content');

const fetchData = async () => {
	const response = await fetch('http://localhost:3000/about');
	return response.json();
};

const titleCase = text => text.charAt(0).toUpperCase() + text.slice(1);

const generateMarkup = ({ columns, data }) => {
	const tableHeadersArray = columns.map(heading => `<th>${titleCase(heading)}</th>`);
	const tableHeaders = '<thead><tr>' + tableHeadersArray.join('') + '</tr></thead>';

	const tableDataArray = data.map(row => {
		return `<tr><td>${row.year}</td><td>${row.description}</td></tr>`;
	});
	const tableData = '<tbody>' + tableDataArray.join('') + '</tbody>'

	return '<table>' + tableHeaders + tableData + '</table>';
};

const renderMarkup = (targetId, elementTag, markup) => {
	const element = document.getElementById(targetId);
	const newElement = document.createElement(elementTag);
	
	newElement.innerHTML = markup;
	element.appendChild(newElement);
};

fetchData().then(data => {
	console.table(data)
	const markup = generateMarkup(data);
	renderMarkup('table-content', 'table', markup);
});