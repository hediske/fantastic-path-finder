import { PriorityQueueValue, PriorityQueueType } from './types';
const top = 0;
const parent = (i:number) => ((i + 1) >>> 1) - 1;
const left = (i:number) => (i << 1) + 1;
const right = (i:number) => (i + 1) << 1;

export class PriorityQueue<T> {

    private _heap: PriorityQueueValue<T>[];
    private _indexs: Map<T, number>;
    private _comparator : (a: PriorityQueueValue<T>, b: PriorityQueueValue<T>) => boolean


  constructor(type : PriorityQueueType) {
    this._heap = [];
    this._indexs = new Map<T, number>();
    if(type==='Max'){
        this._comparator = (a:PriorityQueueValue<T>, b:PriorityQueueValue<T>) => a.priority > b.priority;
    }else{
        this._comparator = (a:PriorityQueueValue<T>, b:PriorityQueueValue<T>) => a.priority < b.priority;
    }
  }


  size() {
    return this._heap.length;
  }


  isEmpty() {
    return this.size() == 0;
  }


  peek() {
    return this._heap[top];
  }


  push(...values :PriorityQueueValue<T>[]) {
    values.forEach(value => {
      this._heap.push(value);
      this._indexs.set(value.value, this.size() - 1);
      this._siftUp();
    });
    return this.size();
  }


  pop() {
    const poppedValue = this._getCorrectValue();
    this._indexs.delete(poppedValue!.value);
    this._siftDown();
    return poppedValue;
  }


  replace(value:PriorityQueueValue<T>) {
    const replacedValue = this.peek();
    this._heap[top] = value;
    this._indexs.delete(replacedValue.value);
    this._indexs.set(value.value, top)
    this._siftDown();
    return replacedValue;
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


  findOrder(value: T) {
    return this._indexs.get(value);
  }


  isIgnored(index : number){
      return index  !== this._indexs.get(this._heap[index].value)
  }


  updatePriority(value: T, priority: number) {
    this.push({ value, priority });
  }
  
  removeElement(value: T) {
    this._indexs.delete(value);
    
  }
  private _getCorrectValue(){
    while(this.isIgnored(0)){
        this.removeFirstElement()
        this._siftDown()
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
