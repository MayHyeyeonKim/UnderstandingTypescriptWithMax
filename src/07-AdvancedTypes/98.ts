// 98. Revisiting the "Record" Type

type MyTypeT = {
    [key: string]: number | boolean;
};

// Record<K, V>
type MyTypeR = Record<string, number | boolean>
