function [ ] = MyPlot( x,t,y )
subplot(1,2,1);
hold on
k=linspace(1,100);
plot(k,x,'b*');
for i=1:100
    if t(i)==0 mod='go';
    else mod='ro';
    end
    plot(k(i),x(i),mod);
end
title('Clasificare dorita:');
legend([],'semnal din emisfera 0','semnal din emisfera 1');
hold off

subplot(1,2,2);
hold on
k=linspace(1,100);
plot(k,x,'b*');
for i=1:100
    if y(i)==0 mod='go';
    else mod='ro';
    end
    plot(k(i),x(i),mod);
end

title('Clasificare obtinuta:');
legend([],'semnal din emisfera 0','semnal din emisfera 1');
hold off

end

