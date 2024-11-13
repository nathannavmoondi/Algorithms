public class MyDictionary<K,V> : IMyDictionary<K,V>
{
   
    public Dictionary<K,V> dict = new Dictionary<K,V>(); // <K,V>

    public void Add(K key, V value)
    {
        if (dict.ContainsKey(key))
        {
            dict[key] = value;
        }
        else
        dict.Add(key, value);        
    }

    public void Remove(K key)
    {
        if (dict.ContainsKey(key))
        {
            dict.Remove(key);
        }
    }

    public V Get(K key)
    {
        if (dict.ContainsKey(key))
        {
            return dict[key];
        }
        else
        {
            return default(V);
        }
    }
}