var all_drugs = [] ; // array of arrays (each is 3 elements)

function fetchAllDrugs() {
  const url = "https://rxnav.nlm.nih.gov/REST/interaction/interaction.json?rxcui=2653";
  console.log("fetching drugs");

  fetch(url)
    .then(response => response.json())
    .then(result => {


      // data from all sources(DrugBank + ONCHigh)
      for(source in result.interactionTypeGroup){
        const drug_name = result.interactionTypeGroup[source].interactionType[0].minConceptItem.name;

        // getting all interaction pairs
        for(idx in result.interactionTypeGroup[source].interactionType[0].interactionPair){
          const d = result.interactionTypeGroup[source].interactionType[0].interactionPair[idx]; // drug object 
          var drug = [];
          drug.push(d.interactionConcept[1].sourceConceptItem.name); //  sourceConceptItem vs minConceptItem
          drug.push(d.severity);
          drug.push(d.description);

          all_drugs.push(drug);
        }
      }

      console.log(all_drugs);

      // displaying the data
      updateTable(all_drugs);
      document.getElementById("data_here").style.display = "block";

      showVisual();
      

    })
    .catch(function(err){
      console.log(err);
    });

}

function newSearch() {
  console.log("clearing");
  document.getElementById("dname").value = "";
  document.getElementById("data_here").style.display = "none";
}

function updateTable(all_drugs) {
  const tbody = document.getElementById("t");
  // clear existing data from tbody if it exists
  tbody.innerHTML = "";
  var p = "";
  all_drugs.forEach(drug => {
    p += "<tr>";
    p += "<td>" + drug[0] + "</td>";
    p += "<td>" + drug[1] + "</td>";
    p += "<td>" + drug[2] + "</td>";
    p += "</tr>";
  })

  tbody.insertAdjacentHTML("beforeend", p);
}

/////////////////////// D3 work ////////////////////


data = {
  "nodes":[
    {"id":"Center piece"},
    {"id":"076-641-402-312-988"},
    {"id":"102-485-198-725-150"},
    {"id":"076-641-402-312-888"},
    {"id":"076-641-402-312-788"},
  ],
  "links":[
    {"source":"Center piece",
     "target":"076-641-402-312-988",
    },
    {"source":"Center piece",
     "target":"102-485-198-725-150",
    },
    {"source":"Center piece",
     "target":"076-641-402-312-888",
    },
    {"source":"Center piece",
     "target":"076-641-402-312-788",
    }
  ]
};

console.log(data);
const n = data.nodes.map(d => d);
const l = data.links.map(d => Object.create(d));
console.log("nodes:"+typeof(n));
console.log(n);
console.log("links:"+typeof(l));
console.log(l);

function showVisual(){
  console.log("---------------showing visual-------------");
  
  const drag = simulation => {
    
    function dragstarted(event, d) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }
    
    function dragged(event,d) {
      d.fx = event.x;
      d.fy = event.y;
    }
    
    function dragended(event,d) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }
    
    return d3.drag()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended);
  }

  const links = all_drugs.map(function(e) {
    return {"source": e[0], "target":"cocaine", "value":2};
  });

  const nodes = all_drugs.map(function(e) {
    return {"id": e[0]};
  });
  nodes.push({"id":"cocaine"})

  console.log(typeof(nodes));
  console.log(nodes);

  console.log(typeof(links));
  console.log(links);


  const width = 370;
  const height = 50;

  const simulation = d3.forceSimulation(nodes)
        .force("link", d3.forceLink(links).id(d => d.id))
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2));

  const svg = d3.select("#svg_container").append("svg")
        .attr("viewBox", [-width / 8, -height / 4, width, height])
        .attr("width", "900px")
        .attr("height", "900px");

  const link = svg.append("g")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.1)
        .selectAll("line")
        .data(links)
        .join("line")
        .attr("stroke-width", d => Math.sqrt(d.value));

  const node = svg.append("g")
        .attr("stroke", "#fff")
        .attr("stroke-width", 0.3)
        .selectAll("circle")
        .data(nodes)
        .join("circle")
        .attr("r", 2)
        .attr("fill", "red")
        .call(drag(simulation));

  node.append("title")
    .text(d => d.id);

  simulation.on("tick", () => {
    link
      .attr("x1", d => d.source.x)
      .attr("y1", d => d.source.y)
      .attr("x2", d => d.target.x)
      .attr("y2", d => d.target.y);
    
    node
      .attr("cx", d => d.x)
      .attr("cy", d => d.y);
  });
}

