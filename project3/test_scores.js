var names = ["Ben", "Joel", "Judy", "Anne"];
var scores = [88, 98, 77, 88];

var $ = function (id) 
{
	 return document.getElementById(id); 
};

window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};

var addScore = function()
{
	var name = $("name").value;
	if(name === "")
	{
		$("name_error").innerHTML = "&nbsp;Name cannot be empty";
		return;
	}
	else
	{
		$("name_error").innerHTML = "";
	}

	var score = $("score").value;
	if(score ==="")
	{
		$("scores_error").innerHTML = "&nbsp;Scores cannot be empty";
		return;
	}
	else
	{
		$("scores_error").innerHTML = "";
	}
	names[names.length] = name;
	scores[scores.length] = parseFloat(score);
	$('name').focus();
};
var displayScores = function()
{
	var html_str = "<h2>Scores</h2>";
	var table_head = "<tr align = 'left'><th>Name</th><th>Score</th></tr>";
 	html_str += table_head;
	var table_content = "";
	for(var i=0; i< scores.length; i++)
	{
		table_content += "<tr>";
		table_content += "<td>" + names[i] + "</td>";
		table_content += "<td>" + scores[i] + "</td>";
		table_content += "</tr>";
	}
	html_str += table_content;
	$("scores_table").innerHTML = html_str;
};
var displayResults = function()
{
	var total = 0;
	var highest = -1;
	var highest_index = 0;
	var average = 0;
	if(scores.length != 0)
	{
		for(var i = 0 ; i < scores.length ; i++)
		{
			total += scores[i];
			if(scores[i] > highest)
			{
				highest = scores[i];
				highest_index = i;
			}
	
		}
		average = parseInt(total / scores.length);
		var highest_name = names[highest_index];
		$("results").innerHTML = "<h2> Results" + "</h2>";
		$("results").innerHTML += "<p> Average score = " + average + "</p>";
		$("results").innerHTML += "<p> High Score = " + names[highest_index] + " with a score of " + scores[highest_index] + "</p><br>";
	}
};
 



window.onload = function () {
	$("add").onclick = addScore;
	$("display_results").onclick = displayResults;
	$("display_scores").onclick = displayScores;
};