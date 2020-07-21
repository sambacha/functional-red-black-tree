export type ComparisonResult = -1 | 0 | 1;

export enum Color {
    RED   = 0,
    BLACK = 1,
}

export type nodeKey = number;

export interface ITree<ValueType> {
    readonly _compare: FunctionCompatator;
    root: INode<ValueType>;

    forEach: (visit: VisitFunction, lo?: nodeKey, hi?: nodeKey) => any;

    readonly keys: nodeKey[];
    readonly values: ValueType[];
    readonly length: number;
    readonly begin: IIterator<ValueType>;
    readonly end: IIterator<ValueType>;

    get: (key: nodeKey) => ValueType;
    insert: (key: nodeKey, value: ValueType) => ITree<ValueType>;
    remove: (key: nodeKey) => ITree<ValueType>;

    at: (idx: number) => IIterator<ValueType>;
    ge: (key: nodeKey) => IIterator<ValueType>;
    gt: (key: nodeKey) => IIterator<ValueType>;
    lt: (key: nodeKey) => IIterator<ValueType>;
    le: (key: nodeKey) => IIterator<ValueType>;
    find: (key: nodeKey) => IIterator<ValueType>;
}

export type Stack<ValueType> = Array<INode<ValueType>>

export interface INode<ValueType>{
    key: nodeKey;
    value: ValueType;
    left: INode<ValueType>;
    right: INode<ValueType>;
    _count: number;
    _color: Color;
}

export interface IIterator<ValueType> {
    tree: ITree<ValueType>;
    _stack: Stack<ValueType>

    readonly valid: boolean;
    readonly node: INode<ValueType>;
    readonly key: number;
    readonly value: ValueType;
    readonly index: number;
    readonly hasNext: boolean;
    readonly hasPrev: boolean;

    update: (value: ValueType) => ITree<ValueType>;
    clone: () => IIterator<ValueType>;
    remove: () => ITree<ValueType>;
    prev: () => void;
    next: () => void;
}

export type FunctionCompatator = (a: number, b: number) => ComparisonResult;
export type VisitFunction = <ValueType>(key: nodeKey, value: ValueType) => any;
