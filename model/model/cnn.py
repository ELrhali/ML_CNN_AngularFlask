import os
import numpy as np 
import pandas as pd
import tensorflow as tf
from tensorflow import keras
from sklearn.preprocessing import MinMaxScaler

BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
MODELS = os.path.join(BASE_DIR, 'model') # we are now in src/model

def predict(a,s) : 
    path = os.path.join(MODELS, "cnn.h5")
    my_model = keras.models.load_model(path)
        
    array  =np.array([[a,s]])
    array = np.expand_dims(array, -1)

    pred = my_model.predict(array)
    pred = int(normalizer(pred)[0])

    return pred

def normalizer(pred): 
    path = os.path.join(MODELS, "y-train.csv")

    # Importing train set to normalizer
    y_train  = pd.read_csv(path,sep=',')
    y_train.set_index("Unnamed: 0", inplace = True)
    y_train.index.names = [""]

    # Training normalizer
    # create scaler
    normer_y = MinMaxScaler()
    # fit scaler on data
    normer_y.fit(y_train)

    pred = normer_y.inverse_transform(pred)
    pred = pred.astype(int)
        
    return pred