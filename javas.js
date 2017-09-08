const getBeersAPI = () => fetch('https://api.punkapi.com/v2/beers')
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let txt = "<table style='width: 60%;margin: auto;' >";
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		txt += "<tr>";
		txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:20%;height:auto;'/></td>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
		txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "</tr>";

        }
		txt += "</table>";
        document.getElementById("table_result").innerHTML = txt;
    })

const getBeerAPIByName = (name) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let txt = "<table style='width: 60%;margin: auto;' >";
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		txt += "<tr>";
		txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:20%;height:auto;'/></td>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
		txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "</tr>";

        }
		txt += "</table>";
        document.getElementById("table_result").innerHTML = txt;
    })

const getBeerAPIByYeast = (yeast) => fetch(`https://api.punkapi.com/v2/beers/?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
      let obj = response;
        let txt = "<table style='width: 60%;margin: auto;' >";
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		txt += "<tr>";
		txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:20%;height:auto;'/></td>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
		txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "</tr>";

        }
		txt += "</table>";
        document.getElementById("table_result").innerHTML = txt;
    })

const getBeerAPIByNameAndYeast = (name,yeast) => fetch(`https://api.punkapi.com/v2/beers/?beer_name=${name}&?yeast=${yeast}`)
    .then(response => response.json())
    .catch(e => console.err('Fail'))
    .then(response => {
        let obj = response;
        let txt = "<table style='width: 60%;margin: auto;' >";
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
        for (let i = 0; i < obj.length; i++) {
		txt += "<tr>";
		txt += "<td>" + "<image src =" + obj[i].image_url + " style='width:20%;height:auto;'/></td>";
        txt += "<td>" + obj[i].name + "</td>";
        txt += "<td>" + obj[i].description + "</td>";
		txt += "<td>" + obj[i].ingredients.yeast + "</td>";
        txt += "</tr>";

        }
		txt += "</table>";
        document.getElementById("table_result").innerHTML = txt;
    })

getBeersAPI()

const toSearch = (name, yeast) => {
    if (yeast != "" && name != "") {
        getBeerAPIByNameAndYeast(name,yeast)
    } else if (yeast != "") {
        getBeerAPIByYeast(yeast)
    } else if (name != "") {
        getBeerAPIByName(name)
    } else {
        let txt = "<table style='width: 90%;margin: auto;' >";
			txt += "<tr style='background-color: #FFE4B5;'>";
			txt += "<th>" + "Image" + "</th>";
			txt += "<th>" + "Beer name" + "</th>";
			txt += "<th>" + "Description" + "</th>";
			txt += "<th>" + "Yeast" + "</th>";
			txt += "</tr>";
		txt += "</table>";
        document.getElementById("table_result").innerHTML = txt;
    }
}
