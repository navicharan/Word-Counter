from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route('/count_words', methods=['POST'])
def count_words():
    data = request.get_json()
    text = data.get('text', '')
    word_count = len(text.split())
    return jsonify({'word_count': word_count})

if __name__ == '__main__':
    app.run(debug=True, port=5000)
