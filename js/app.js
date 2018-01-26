new Vue({
	el: '#app',
	
	data:{
		ao: {
			name: 'Alvaro Alday',
			points: 0,
			c1: 0,
			c2: 0,
		},
		aka: {
			name: 'Ruben Gomez',
			points: 0,
			c1: 0,
			c2: 0,
		},
		division: 'Males -60kg',
		atoshi_baraku: false,
		minutes: 3,
		timer:{
			on: false,
			seconds: 0,
			minutes: 3,
			status: 'Pause'
		},
		placeholder:'0'
	},
	methods:{
		start_tiempo:function(){
			this.timer.on=!this.timer.on
			if (this.timer.on) {
				this.timer.status= '';
				if (this.timer.seconds<10) {
					this.placeholder='0';
				}else{
					this.placeholder='';
				}
				this.tiempo();
			}else{
				this.timer.status= 'Pause';
			}
		},
		tiempo: function()
		{
			if (this.timer.seconds<10) {
				this.placeholder='0';
			}
			if (this.timer.on) {
				this.timer.seconds-=1;
				if (this.timer.seconds<10) {
					this.placeholder='0';
				}else{
					this.placeholder='';
				}
				aux=setTimeout(this.tiempo, 1000);
			}
			
			if (this.timer.seconds<0){
				this.timer.minutes--;
				this.placeholder='';
				this.timer.seconds=59;
			}
			if ((this.ao.points-this.aka.points)>=8) {					
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if ((this.aka.points-this.ao.points)>=8) {
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if (this.timer.seconds==0&&this.timer.minutes==0){
				if (this.ao.points>this.aka.points) {					
					swal(this.ao.name+" gana!");
				}else if(this.ao.points<this.aka.points){
					swal(this.aka.name+" gana!");
				}else
				{
					swal("Empate, punto de oro");
				}
				clearTimeout(aux);
				crear_board();
			}
		},
		clear_board: function(){
			this.timer.seconds=0;
			this.placeholder='0';
			this.timer.minutes=3;
			this.aka.points=0;
			this.aka.c1=0;
			this.aka.c2=0;
			this.ao.points=0;
			this.ao.c1=0;
			this.ao.c2=0;
			this.timer.on=false;
		},
		chk_points: function(){
			if ((this.ao.points-this.aka.points)>=8) {					
				swal(this.ao.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
			if ((this.aka.points-this.ao.points)>=8) {
				swal(this.aka.name+" gana!");
				clearTimeout(aux);
				clear_board();
			}
		},
		aka_yuko: function() 
		{
			this.aka.points++;
			this.chk_points();
		},
		aka_wazaari: function() 
		{
			this.aka.points += 2;
			this.chk_points();
		},
		aka_ippon: function() 
		{
			this.aka.points += 3;
			this.chk_points();
		},
		ao_yuko: function()
		{
			this.ao.points++;
			this.chk_points();
		},
		ao_wazaari: function() 
		{
			this.ao.points += 2;
			this.chk_points();
		},
		ao_ippon: function() 
		{
			this.ao.points += 3;
			this.chk_points();
		},

		// Ao infractions
		// C1 Infractions
		ao_chukoku_c1:function(){
			this.ao.c1=1;
		},
		ao_keikoku_c1:function(){
			this.ao.c1=2;
		},
		ao_hansoku_chui_c1:function(){
			this.ao.c1=3;
		},
		ao_hansoku_c1:function(){
			this.ao.c1=4;
			swal(this.aka.name+" gana!");
		},
		// C2 Infractions
		ao_chukoku_c2:function(){
			this.ao.c2=1;
		},
		ao_keikoku_c2:function(){
			this.ao.c2=2;
		},
		ao_hansoku_chui_c2:function(){
			this.ao.c2=3;
		},
		ao_hansoku_c2:function(){
			this.ao.c2=4;
			swal(this.aka.name+" gana!");
		},

		// Aka infractions
		// C1 Infractions
		aka_chukoku_c1:function(){
			this.aka.c1=1;
		},
		aka_keikoku_c1:function(){
			this.aka.c1=2;
		},
		aka_hansoku_chui_c1:function(){
			this.aka.c1=3;
		},
		aka_hansoku_c1:function(){
			this.aka.c1=4;
			swal(this.ao.name+" gana!");
		},
		// C2 Infractions
		aka_chukoku_c2:function(){
			this.aka.c2=1;
		},
		aka_keikoku_c2:function(){
			this.aka.c2=2;
		},
		aka_hansoku_chui_c2:function(){
			this.aka.c2=3;
		},
		aka_hansoku_c2:function(){
			this.aka.c2=4;
			swal(this.ao.name+" gana!");
		},
	}
});