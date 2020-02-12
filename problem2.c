#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

bool is_even(int);
int calc_even_fib_sum(int);

int main(int argc, char *argv[]) {
    int const MAX_NUMBER = 4000000;
    int sum = calc_even_fib_sum(MAX_NUMBER);
    printf("SUM: %d\n", sum);
    return EXIT_SUCCESS;
}

int calc_even_fib_sum(int max) {
    int last, sum, tmp = 0;
    int cur = 1;

    while(cur < max) {
        tmp = cur;
        cur += last;
        last = tmp;
        if(is_even(cur)) sum += cur;
    }

    return sum;
}

bool is_even(int input) {
    return input % 2 == 0;
}