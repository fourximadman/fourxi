using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    class Program
    {
        static void Main(string[] args)
        {
            SetCode();
        }
        /// <summary>
        /// 绘制验证码的方法
        /// </summary>
        public static void SetCode()
        {


            //验证码大小宽65，高20
            Bitmap image = new Bitmap(180, 100);
            //创建绘图对象Graphics
            Graphics g = Graphics.FromImage(image);
            //随机
            Random r = new Random();
            g.Clear(Color.AliceBlue);


            for (int i = 0; i < 20; i++)
            {
                Color[] colors = new Color[]{ Color.Blue, Color.Red, Color.Purple, Color.SandyBrown };
                int x = r.Next(image.Width);
                int y = r.Next(image.Height);
                image.SetPixel(x, y, colors[2]);


            }
            //绘制随机出现的线
            for (int i = 0; i < 20; i++)
            {
                int x1 = r.Next(image.Width);
                int y1 = r.Next(image.Height);

                int x2 = r.Next(image.Width);
                int y2 = r.Next(image.Height);
                g.DrawLine(new Pen(Brushes.Black, 1), new Point(x1, y1), new Point(x2, y2));
            }
            g.DrawString("雨你无瓜", new Font("宋体", 26), new SolidBrush(Color.DarkRed), new PointF(25, 25));
            //    string[] vs = { };
            //    for (int i = 0; i < 1; i++)
            //    {

            //    }
            image.Save(@"d:\17bang\moxian.jpg");
            Process.Start(@"d:\17bang\moxian.jpg");
            Console.WriteLine("hello,world");
        }
    }
}

