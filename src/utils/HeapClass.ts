import { PriorityQueueValue, PriorityQueueType } from './types';
const top = 0;
const parent = (i:number) => ((i + 1) >>> 1) - 1;
const left = (i:number) => (i << 1) + 1;
const right = (i:number) => (i + 1) << 1;

export class PriorityQueue<T,V> {

    _heap: PriorityQueueValue<T,V>[];
    _indexs: Map<T, number>;
    private _comparator : (a: PriorityQueueValue<T,V>, b: PriorityQueueValue<T,V>) => boolean = (a:PriorityQueueValue<T,V>, b:PriorityQueueValue<T,V>) => a.priority > b.priority;


  constructor(type? : PriorityQueueType , comparator? : (a: PriorityQueueValue<T,V>, b: PriorityQueueValue<T,V>) => boolean) {
    this._heap = [];
    this._indexs = new Map<T, number>();
    if(type)
    {
      if(type==='Max'){
          this._comparator = (a:PriorityQueueValue<T,V>, b:PriorityQueueValue<T,V>) => a.priority > b.priority;
        }
      else{
          this._comparator = (a:PriorityQueueValue<T,V>, b:PriorityQueueValue<T,V>) => a.priority < b.priority;
        }
      return;
    }

    if(comparator){
      this._comparator = comparator;
    }

  }


  size() {
    return this._heap.length;
  }


  isEmpty() {
    return this.size() === 0;
  }


  peek() {
    return this._heap[top];
  }


  push(...values :PriorityQueueValue<T,V>[]) {
    values.forEach(value => {
      this._heap.push(value);
      this._indexs.set(value.value, this.size() - 1);
      this._siftUp();
    });
    return this.size();
  }


  pop() {
    const poppedValue = this._getCorrectValue();
    if(poppedValue === undefined) return undefined
    this._indexs.delete(poppedValue!.value);
    this._siftDown();
    return poppedValue;
  }


  replace(value:PriorityQueueValue<T,V>) {
    this.pop();
    this.push(value);
    return this.size();
  }


  _greater(i:number, j:number) {
    return this._comparator(this._heap[i], this._heap[j]);
  }


  _swap(i:number, j:number) {
    if(!this.isIgnored(i)){
      this._indexs.set(this._heap[i].value, j);
    }
    if(!this.isIgnored(j)){ 
      this._indexs.set(this._heap[j].value, i);
    }
    [this._heap[i], this._heap[j]] = [this._heap[j], this._heap[i]];
  }


  _siftUp() {
    let node = this.size() - 1;
    while (node > top && this._greater(node, parent(node))) {
      this._swap(node, parent(node));
      node = parent(node);
    }
  }


  _siftDown() {
    let node = top;
    while (
      (left(node) < this.size() && this._greater(left(node), node)) ||
      (right(node) < this.size() && this._greater(right(node), node))
    ) {
      let maxChild = (right(node) < this.size() && this._greater(right(node), left(node))) ? right(node) : left(node);
      this._swap(node, maxChild);
      node = maxChild;
    }
  }


  contains(value: T) {
    return this._indexs.has(value);
  }


  isIgnored(index : number){
      if(index<0 || index>=this.size()) return true
      return index  !== this._indexs.get(this._heap[index].value)
  }


  updatePriority(value: T, priority: V) {
    this.push({ value, priority });
  }
  
  removeElement(value: T) {
    this._indexs.delete(value);

  }
  private _getCorrectValue(){
    while(this.isIgnored(0)){
        this.removeFirstElement()
        this._siftDown()
        if(this._heap.length===0){
          return undefined
        }
        else {
          this._siftDown()
        }
    }
    return this.removeFirstElement()

  }

  private removeFirstElement(){
    const poppedValue =  this.peek()
    const bottom = this.size() - 1;
    if (bottom > top) {
      this._swap(top, bottom);
    }
    this._heap.pop()
    return poppedValue
  }

}
