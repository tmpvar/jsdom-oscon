highlight --src-lang=js --style=whitengrey -c highlight.css -O html -B *-*.js

for file in `ls *-*.html`
do
  wkhtmltopdf $file $file.pdf
done;
