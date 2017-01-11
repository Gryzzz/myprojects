import edu.princeton.cs.algs4.WeightedQuickUnionUF;

public class Percolation {
    private int[][] grid;
    private int openCounter = 0;
    private WeightedQuickUnionUF wqu;
    private int gridWith;
    private int top;
    private int bottom;

    public Percolation(int n) {
        if (n <= 0) {
            throw new IllegalArgumentException();
        }
        grid = new int[n][n];
        gridWith = n;
        wqu = new WeightedQuickUnionUF(n * n + 2);
        top = 0;
        bottom = n * n + 1;
    }

    private int cellToNumber(int row, int col) {
        return (row - 1) * gridWith + col;
    }

    public void open(int row, int col) {
        if (row <= 0 || col <= 0 || row > gridWith || col > gridWith) {
            throw new IndexOutOfBoundsException();
        }
        if (grid[row - 1][col - 1] == 0) {
            grid[row - 1][col - 1] = 1;
            openCounter++;
            if (row == 1) wqu.union(top, cellToNumber(row, col));
            if (row == gridWith) wqu.union(bottom, cellToNumber(row, col));
            if (row > 1 && isOpen(row - 1, col)) wqu.union(cellToNumber(row, col), cellToNumber(row - 1, col));
            if (col > 1 && isOpen(row, col - 1)) wqu.union(cellToNumber(row, col), cellToNumber(row, col - 1));
            if (row < gridWith && isOpen(row + 1, col)) wqu.union(cellToNumber(row, col), cellToNumber(row + 1, col));
            if (col < gridWith && isOpen(row, col + 1)) wqu.union(cellToNumber(row, col), cellToNumber(row, col + 1));
        }
    } // open site (row, col) if it is not open already
    
    public boolean isOpen(int row, int col) {
        if (row <= 0 || col <= 0 || row > gridWith || col > gridWith) {
            throw new IndexOutOfBoundsException();
        }
        if (grid[row - 1][col - 1] == 0) return false;
        return true;
    } // is site (row, col) open?

    public boolean isFull(int row, int col) {
        if (row <= 0 || col <= 0 || row > gridWith || col > gridWith) {
            throw new IndexOutOfBoundsException();
        }
        if (isOpen(row,col)) {
            return wqu.connected(top, cellToNumber(row, col));
        }
        return false;
        
    } // is site (row, col) full?

    public int numberOfOpenSites() {
        return openCounter;
    } // number of open sites

    public boolean percolates() {
        if (wqu.connected(top, bottom)) return true;
        return false; // does the system percolate?
    }

    public static void main(String[] args) {
        Percolation p = new Percolation(10);
//        p.open(1, 1);
        System.out.println(p.isFull(1, 1));
    } // test client (optional)
}
