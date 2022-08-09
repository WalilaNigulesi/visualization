import PIL.Image
import pandas as pd
import numpy as np
import json
df = pd.read_csv('ship_new.csv',index_col=0)
t = df['date']
a = np.array(t)

l=[]
l.append(a[0])
for i in range(2,len(a)):
    if a[i] != a[i-1] :
        l.append(a[i])
#print(l)
#print(ship['RMC_LATITUDE','RMC_LONGITUDE','RMC_GROUND_SPEED'	,'RMC_UTC_DATE'	,'RMC_GROUND_WEEK'])
array = np.array(df)
list = array.tolist()
#print(list)
result = [{"series":list , "timeline":l}]
with open('data.json', 'w', encoding='utf-8') as json_file:
    json.dump(result, json_file, ensure_ascii=False)
    print("write json file success!")
