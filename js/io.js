var swordsman = function(){
	var prevImage = '<img src="images/swordsman.jpg">';

};

function hero(name, image, skills) {
    this.heroClass = name;
    this.imgPrev = image;
	this.heroSkills = skills;
}
function skill(name, image) {
    this.skillName = name;
    this.icon = image;

}


var main = function(){
	var preview = '';
	
	var swordsmanSkills = [new skill("Rage", '<img src="images/anger.png" width="50px" height="50px">'),new skill("Rage", '<img src="images/anger.png" width="50px" height="50px">')];
	var swordsman = new hero("Archer", '<img src="images/swordsman.jpg" class="prevImg">',swordsmanSkills);
	
	var archer = new hero("Archer", '<img src="images/archer.jpg" class="prevImg">');
	
	$('.swordsman').click(function(){	
		if(preview === '' || preview !== 'swordsman'){
			$('.hero-prev').children().remove();
			$('.hero-prev').append(swordsman.imgPrev);
			$('.hero-prev').append(swordsman.heroSkills[0].icon);
			$('.hero-prev').append('<br />');
			$('.hero-prev').append(swordsman.heroSkills[1].icon);
			preview = 'swordsman';
		}else{
			$('.hero-prev').children().remove();
			preview = '';
		}
	});
	$('.archer').click(function(){	
		if(preview === '' || preview !== 'archer'){
			$('.hero-prev').children().remove();
			$('.hero-prev').append(archer.imgPrev);
			preview = 'archer';
		}else{
			$('.hero-prev').children().remove();
			preview = '';
		}
	});
};

$(document).ready(main);