function [ x,t ] = CreeazaS( s0,s1 )
    z=randn;
    t=(vertcat(zeros(50,1),ones(50,1)));
    p=randperm(length(t))';
    t=t(p);
    x=zeros(length(t),1);
    x(find(t==0))=s0;
    x(find(t==1))=s1;
    for i=1:length(t)
        x(i)=x(i)+randn;
    end   
end

