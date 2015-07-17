(function(){
var readline = require('readline');
var rl = readline.createInterface({
				  input: process.stdin,
					  output: process.stdout
});
				var l = 7,
								w = 7,
								grid = [];

				/**
				 * flatten array, reduce
				 */
				function isWinner(grid){
								return !grid
									.reduce(function(p,c){ return p.concat(c)})
									.reduce(function(p,c){ return p || c }, false);
				}

				function init(l,w, grid){
								console.log('Initializing Grid');
								for(var x = 0;x<l;x++){
												grid.push([]);
												for(var y = 0;y<w;y++){
																grid[x][y] = (Math.round(Math.random())) ? true:false;
												}


								}
								console.log(grid);
				}

				function safeToggle(x,y){
							if(typeof grid[x][y]) grid[x][y] != grid[x][y];	
				}

				function toggle(x,y){
					safeToggle(grid[x-1][y-1]);
					safeToggle(grid[x-1][y]);
					safeToggle(grid[x-1][y+1]);

					safeToggle(grid[x][y-1]);
					safeToggle(grid[x][y]);
					safeToggle(grid[x][y+1]);

					safeToggle(grid[x+1][y-1]);
					safeToggle(grid[x+1][y]);
					safeToggle(grid[x+1][y+1]);
				}
				
				init(l,w,grid);
				console.log(isWinner(grid));

				while(!isWinner(grid)){
								rl.prompt("Toggle x,y?",function(input){
												var coords = input.split(',');
												var x = parseInt(coords[0].trim(),10);
												var y = parseInt(coords[1].trim(),10);
												
												toggle(x,y);
												if(!isWinner(grid)){
																console.log(grid);
												} else {
																console.log("WINNER");
																rl.close();
												}
								});
				}

})();
