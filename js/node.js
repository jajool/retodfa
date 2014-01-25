function Node(value , isStart,isEnd){
    this.childs = {};
    this.value=value;
    this.isStart = isStart;
    this.isEnd = isEnd;
    this.addChild = function(alpha, node){
        if(!this.childs[alpha]){
            this.childs[alpha]=[];
        }
        this.childs[alpha].push(node);
    }
    return this;
}
function getLinks(startNode){
    var links=[];
    var visited=[];
    (function mover(start){
        if(start==null){
            return;
        }
        if(visited[start.value]){
            return;
        }
        visited[start.value]=1;
        for( var key in start.childs){
            if(start.childs.hasOwnProperty(key)){
                for(var j=0;j<start.childs[key].length;j++){
                    links.push({source: start.value,target: start.childs[key][j].value,type:key});
                    mover(start.childs[key][j]);
                }
            }
        }
    })(startNode);
    return links;
}