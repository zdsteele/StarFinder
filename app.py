from flask import Flask, jsonify, render_template, url_for
from datetime import datetime
# from flask_bootstrap import Bootstrap
from flask_moment import Moment
import pandas as pd
import json

app = Flask(__name__)
# bootstrap = Bootstrap(app)
moment = Moment(app)

df = pd.read_csv('Skyserver_2019.csv')
mean_df = pd.read_csv('mean.csv')


@app.route("/index", methods=['GET', 'POST'])
def index():
    
    df_reduced = mean_df[['ra','dec','u','g','r','i','z','redshift','class']]
    df_reduced.loc[:, 'class'] = df_reduced.loc[:, 'class'].map(lambda x: x.lower().capitalize())
    df_reduced.set_index(['class'], inplace=True)
    return render_template('index.html', tables=[df_reduced.to_html()], 
                                titles=df_reduced.columns.values)

@app.route("/astro")
def astro():

    return render_template('astronomy.html')

@app.route("/model")
def model():

    return render_template('model.html')

@app.route("/")
def cover():

    return render_template('Cover.html')

@app.route("/data")
def get_data():

    
    count_dict = dict(df["class"].value_counts())
    cats = list(count_dict.keys())
    cats = list(map(lambda x: x.lower().capitalize(), cats))
    counts = list(count_dict.values())
    data = [{"Class":cats[0],"Counts":int(counts[0])},{"Class":cats[1],
                    "Counts":int(counts[1])},{"Class":cats[2],"Counts":int(counts[2])}]
    return jsonify(data)

@app.route("/corr_data")
def cor_data():
    import json
    af = df[['ra','dec','u','g','r','i','z','redshift']]
    data = json.dumps(json.loads(af.to_json(orient='records')))
    return data

@app.route("/dataset1")
def data1():
    import json
    af = df[['r','z']]
    data = json.dumps(json.loads(af.to_json(orient='records')))
    return data

@app.route("/dataset2")
def data2():
    import json
    af = df[['ra','dec']]
    data = json.dumps(json.loads(af.to_json(orient='records')))
    return data

@app.route("/dataset3")
def data3():
    import json
    af = df[['z','redshift']]
    data = json.dumps(json.loads(af.to_json(orient='records')))
    return data

@app.route("/explore")
def explore_data():

    return render_template('explore_data.html')

@app.route("/metadata")
def metadata():

    return render_template('metadata.j2')

@app.route("/redshift")
def redshift():
    
    grouped_df = df.groupby(["class"]).mean()
    json = grouped_df[['redshift']].sort_values(by='redshift')
    list(json.values[2])
    list(json.index)
    data = [{"Class":list(json.index)[0],"Redshift":float(list(json.values[0])[0])},
                    {"Class":list(json.index)[1],"Redshift":float(list(json.values[1])[0])},{"Class":list(json.index)[2],"Redshift":float(list(json.values[2])[0])}]

    return jsonify(data)

if __name__ == "__main__":
    app.run(debug=True)
