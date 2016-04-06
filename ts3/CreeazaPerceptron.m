function [ w,y,err ] = CreeazaPerceptron( x,t,nrepoci )
[m,n]=size(x);
w=rand(n+1,1)*2-1;
y=zeros(m,1);

for e=1:nrepoci
    p=randperm(m);
    x=x(p,:);
    t=t(p);
    for i=1:m
        xi=[x(i,:) 1];
        out=xi*w;
        if out>0 y(i)=0;
        else y(i)=1;
        end
    end
end
err=nnz(gsubtract(y,t))/m;
end

