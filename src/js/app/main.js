var CML = CML || {};

$(function(){
    CML.init();
    console.log('test');
});


CML = {
    init : function(){
        this.headerInit();
    },
    headerInit : function(){
        var heroData = this.dataset,
            $hero = $('#hero'),
            $leftHero = $hero.find('.block-left'),
            $rightHero = $hero.find('.block-right'),
            $side,
            sizes = [/*'small', */'medium', 'large'],
            size,
            colors = ['color-1', 'color-2', 'color-3'],
            color,
            spacings = ['spacing-small', 'spacing-medium', 'spacing-large', 'spacing-xlarge'],
            spacing;

        $.each(heroData, function(i, patient){
            size = sizes[Math.floor(Math.random()*sizes.length)]; //Assign random value
            color = colors[Math.floor(Math.random()*colors.length)]; //Assign random value
            spacing = spacings[Math.floor(Math.random()*spacings.length)]; //Assign random value

            $side = (i<=heroData.length/2) ? $leftHero : $rightHero; //Split items into 2 parts

            if(i == 1 || i == Math.floor(heroData.length/2)+2){
                $side.append('<div class="item-video"></div>');
            }else{
                $side.append('<div class="item-patient ' + size + ' ' +color + ' ' +spacing + '">'+patient.name+'</div>'); //Append the data to the defined container
            }
        });

        $('.item-video, #close').on('click', function(){
            $hero.toggleClass('move');
        });
    }
};


CML.dataset = [
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 1",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 2",
        quote: "Merci beacuoup"
    },
    patient = {
        name: "Patient 3",
        quote: "Merci beacuoup"
    }
];