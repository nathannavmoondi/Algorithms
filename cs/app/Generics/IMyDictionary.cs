interface IMyDictionary<K,V>
{
    void Add(K key, V value);
    V Get(K key);
}