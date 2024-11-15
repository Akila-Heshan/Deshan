/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/JSP_Servlet/Servlet.java to edit this template
 */
package controller;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import entity.Motor;
import java.io.IOException;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import model.HibernateUtil;
import org.hibernate.Criteria;
import org.hibernate.Session;
import org.hibernate.criterion.Restrictions;

/**
 *
 * @author manga
 */
@WebServlet(name = "SetData", urlPatterns = {"/SetData"})
public class SetData extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String number = req.getParameter("number");
        
        Session session = HibernateUtil.getSessionFactory().openSession();

        Criteria criteria;
        
        if(number.equals("1")){
            criteria = session.createCriteria(Motor.class);
            criteria.add(Restrictions.eq("name", "forward"));
        }else if(number.equals("2")){
            criteria = session.createCriteria(Motor.class);
            criteria.add(Restrictions.eq("name", "back"));
        }else if(number.equals("3")){
            criteria = session.createCriteria(Motor.class);
            criteria.add(Restrictions.eq("name", "left"));
        }else {
            criteria = session.createCriteria(Motor.class);
            criteria.add(Restrictions.eq("name", "right"));
        }

        Motor motor = (Motor) criteria.uniqueResult();
        motor.setValue(1);
        session.save(motor);

        session.beginTransaction().commit();
        session.close();

    }

}
