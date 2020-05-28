from flask import Flask, jsonify, render_template, url_for
from datetime import datetime
# from flask_bootstrap import Bootstrap
from flask_moment import Moment
import pandas as pd

app = Flask(__name__)
# bootstrap = Bootstrap(app)
moment = Moment(app)

df = pd.read_csv('mean.csv')

@app.route("/index", methods=['GET', 'POST'])
def index():
    
    df = pd.read_csv('mean.csv')
    df_reduced = df[['ra','dec','u','g','r','i','z','redshift','class']]
    df_reduced.loc[:, 'class'] = df_reduced.loc[:, 'class'].map(lambda x: x.lower().capitalize())
    df_reduced.set_index(['class'], inplace=True)
    return render_template('index.html', tables=[df_reduced.to_html()], 
                                titles=df_reduced.columns.values)


@app.route("/average")
def average_table_data():

    cols = df.columns

    return jsonify(cols)


@app.route("/astro")
def astro():

    return render_template('astronomy.html')

@app.route("/")
def cover():

    return render_template('Cover.html')

@app.route("/data")
def get_data():

    df = pd.read_csv('Skyserver_2019.csv')
    count_dict = dict(df["class"].value_counts())
    cats = list(count_dict.keys())
    cats = list(map(lambda x: x.lower().capitalize(), cats))
    counts = list(count_dict.values())
    data = [{"Class":cats[0],"Counts":int(counts[0])},{"Class":cats[1],
                    "Counts":int(counts[1])},{"Class":cats[2],"Counts":int(counts[2])}]
    return jsonify(data)


@app.route("/redshift")
def redshift():

    df = pd.read_csv('Skyserver_2019.csv')
    grouped_df = df.groupby(["class"]).mean()
    json = grouped_df[['redshift']].sort_values(by='redshift')
    list(json.values[2])
    list(json.index)
    data = [{"Class":list(json.index)[0],"Redshift":float(list(json.values[0])[0])},
                    {"Class":list(json.index)[1],"Redshift":float(list(json.values[1])[0])},{"Class":list(json.index)[2],"Redshift":float(list(json.values[2])[0])}]

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
