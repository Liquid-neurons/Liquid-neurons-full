
# Codebase for Liquid Neurons Pvt. Ltd

## Directory structure :


```
|-- fontend
|    |-- node modules
|    |-- public
|    |-- src
|    |-- package.json
|    |-- package-lock.json
|    |-- yarn.lock
|-- backend
     |-- app.py   
     |-- best.pt  
     |-- requirements.txt 
     |-- uploads 
```







## Tech Stack

**Client:** React, Css

**Server:** Flask, Python


## API Reference

#### Send and return annotated image with count

```http
  POST http://127.0.0.1:5000/upload   (local host)
```

 | Type     | Return               |
| :------- | :------------------------- |
| `image` | `count, annotated_image_path` |

## Running the application

### Start flask server

Prequisite : Python 

```bash
  cd backend
  pip install -r requirements.txt
  python3 app.py
```

### Start react application

Prequisite : Node 

```bash
  cd fontend
  npm install
  npm start
```
    
## Demo

https://liquid-neurons-full.vercel.app/

