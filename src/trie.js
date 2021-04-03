/* Class representing a Trie data structure */
class Trie {
    constructor() {
      this.end = false;
      this.children = {};
    }
  
    insert(str, pos = 0) {
      if (str.length === pos) {
        this.end = true;
        return;
      }
  
      let key = [str[pos]];
      if (!this.children[key]) this.children[key] = new Trie();
  
      this.children[key].insert(str, pos + 1);
    }
  
    getAllWords(word = "", words = []) {
      if (this.end) words.push(word);
  
      for (let key in this.children) {
        this.children[key].getAllWords(word , words);
      }
      return words;
    }
  
    autoComplete(word='', pos=0) {
      word = word.toLowerCase();
      let words =[];
      if (this.end) words.push(word);
      // console.log(words)
      for (let key in this.children) {
        
        if (key == word[pos]) {
          this.children[key].getAllWords(key, words);
        }
      }
      return words;
    }
  }
  
  // tests
  const trie = new Trie();
  trie.insert("cat");
  trie.insert("dog");
  trie.insert("cars");
  trie.insert("dolphin");
  trie.insert("dar");
  
  console.log(trie);
  console.log("**************************");
  console.log(trie.getAllWords());
  console.log(trie.autoComplete("do"));
  