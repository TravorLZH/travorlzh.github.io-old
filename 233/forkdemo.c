#include <stdio.h>
#include <unistd.h>

int main(void){
    pid_t pid=fork();
    if(pid==0){
        printf("I am the child procss!\n");
    }else if(pid>0){
        printf("I am the parent process, the child pid is %d\n",pid);
    }else{
        perror("ERROR");
        return -1;
    }
    return 0;
}
