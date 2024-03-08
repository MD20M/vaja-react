# Uvozimo Flask, request in jsonify iz razreda Flask
from flask import Flask, request, jsonify

# Ustvarimo instanco razreda Flask
app = Flask(__name__) 

# Ustvarimo nekaj knjig kot JSON
books = [
    {"id": 1, "title": "Book 1", "author": "Author 1"},
    {"id": 2, "title": "Book 2", "author": "Author 2"},     
    {"id": 3, "title": "Book 3", "author": "Author 3"}
]

# Ustvarimo dostopno metodo do vseh knjig 
@app.route('/books', methods=['GET'])
def get_books():
    response = jsonify(books)
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

# Ustvarimo dostopno metodo do posamezne knjige
@app.route('/books/<int:id>', methods=['GET'])
def get_book(id):
    book = next((book for book in books if book['id'] == id), None)
    if book:
        return jsonify(book)
    else:
        return jsonify({"error": "Book not found"}), 404

# Ustvarimo metodo za dodajanje nove knjige
@app.route('/books', methods=['POST'])
def add_book():
    data = request.get_json()
    new_book = {"id": len(books) + 1, "title": data['title'], "author": data['author']}
    books.append(new_book)
    return jsonify(new_book), 201

# Ustvarimo metodo za posodabljanje knjige
@app.route('/books/<int:id>', methods=['PUT'])
def update_book(id):
    data = request.get_json()
    book = next((book for book in books if book['id'] == id), None)
    if book:
        book.update(data)
        return jsonify(book)
    else:
        return jsonify({"error": "Book not found"}), 404

# Ustvarimo metodo za brisanje knjige
@app.route('/books/<int:id>', methods=['DELETE'])
def delete_book(id):
    global books
    books = [book for book in books if book['id'] != id]
    return jsonify({"message": "Book deleted"}), 200

# Zaženemo Flask aplikacijo
if __name__ == '__main__':
    app.run(debug=True)