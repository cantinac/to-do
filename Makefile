STYLE_SRC=./scss/styles.scss
STYLE_DEST=./public/css/styles.css

main: compileCoffee compileScss

compileCoffee:
	coffee -c ./

compileScss:
	sass $(STYLE_SRC) > $(STYLE_DEST)
