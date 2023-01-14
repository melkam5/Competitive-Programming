class Result {

    /*
     * Complete the 'countSwaps' function below.
     *
     * The function accepts INTEGER_ARRAY a as parameter.
     */

    public static void countSwaps(List<Integer> a) {
    int size = a.size();
        int count = 0, temp = 0;
        
        for (int i = 0; i < size - 1; i++) {
            for (int j = 0; j < size - i - 1; j++) {
                if (a.get(j) > a.get(j+1)) {
                    count++;
                    temp = a.get(j);
                    a.set(j, a.get(j+1));
                    a.set(j+1, temp);
                }
            }
        }
        System.out.printf("Array is sorted in %d swaps.%n", count);
        System.out.printf("First Element: %d%n", a.get(0));
        System.out.printf("Last Element: %d%n", a.get(a.size() - 1));
    }

}
