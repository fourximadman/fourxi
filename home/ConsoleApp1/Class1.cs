using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace ConsoleApp1
{
    class Class1
    {
        XDocument document = new XDocument(
                   new XDeclaration("1.0", "utf-8", "yes"),   //添加一个XML声明
                   luckystack);
        private static readonly object[] luckystack;

        document.Save("d:\\17bang\\luckystack.xml");
    }
}
