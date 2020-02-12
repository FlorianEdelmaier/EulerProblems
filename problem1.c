#include <stdio.h>
#include <stdlib.h>
#include <stdbool.h>

int main(int argc, char *argv[])
{
	int sum = 0;
	for(int i = 0; i < 1000; i++) {
		if(i % 3 == 0 || i % 5 == 0) {
			sum += i;
		}	
	}			
	printf("Summe %i\n", sum);
	return EXIT_SUCCESS;
}
