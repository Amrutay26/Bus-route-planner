

const edgemodel=require('../models/edge');

const graphbuilder=async()=>{
 const graph=new Map();
   const edges=await edgemodel.find();

  for(const edge of edges){
    const key = edge.fromStop.toString()

    if (!graph.has(key)) {
      graph.set(key, [])
    }
    graph.get(key).push({
      toStop: edge.toStop.toString(),
      time: edge.time,
      distance: edge.distance,
      routeNumber: edge.routeNumber
    })
  }

  return graph

}



