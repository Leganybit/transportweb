from flask import Flask, render_template, request

def create_app():
	app = Flask(__name__)

	@app.route("/")
	def main():
		return render_template("/main.html")

	@app.route("/price", methods=['GET', 'POST'])
	def price():
		return render_template("/price.html", km=request.form["km"])

	return app

	'''Explicación a la suma
	{{2 *(2<!--precio gasolina-->*(km | int /100 * 8<!--consumo-->))
	+ (2<!--hora inicio--> * 10 <!--precioHora-->)+(10<!--preciohora-->*(km|int/200)*(10<!--precioHora-->/4<!--descansosPorHora-->))
	+(<!--falta x-->+10 +(1/3*km|int/100)*10<!--precioHora-->)}}
	'''