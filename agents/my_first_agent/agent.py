"""
My First ADK Agent - A simple demo agent with tools.
"""
from google.adk.agents import Agent


def get_weather(city: str) -> dict:
    """Get the current weather for a city.
    
    Args:
        city: The name of the city to get weather for.
    
    Returns:
        A dictionary containing weather information.
    """
    # Mock weather data - in production, you'd call a real weather API
    weather_data = {
        "new york": {"temp": "45°F", "condition": "Cloudy", "humidity": "65%"},
        "los angeles": {"temp": "72°F", "condition": "Sunny", "humidity": "40%"},
        "london": {"temp": "50°F", "condition": "Rainy", "humidity": "80%"},
        "tokyo": {"temp": "55°F", "condition": "Clear", "humidity": "55%"},
    }
    
    city_lower = city.lower()
    if city_lower in weather_data:
        return {
            "status": "success",
            "city": city,
            **weather_data[city_lower]
        }
    return {
        "status": "success", 
        "city": city,
        "temp": "60°F",
        "condition": "Partly Cloudy",
        "humidity": "50%"
    }


def calculate(expression: str) -> dict:
    """Safely evaluate a mathematical expression.
    
    Args:
        expression: A mathematical expression like "2 + 2" or "10 * 5".
    
    Returns:
        The result of the calculation.
    """
    try:
        # Only allow safe mathematical operations
        allowed_chars = set("0123456789+-*/.() ")
        if not all(c in allowed_chars for c in expression):
            return {"status": "error", "message": "Invalid characters in expression"}
        
        result = eval(expression)
        return {"status": "success", "expression": expression, "result": result}
    except Exception as e:
        return {"status": "error", "message": str(e)}


def get_current_time() -> dict:
    """Get the current date and time.
    
    Returns:
        Current date and time information.
    """
    from datetime import datetime
    now = datetime.now()
    return {
        "status": "success",
        "date": now.strftime("%Y-%m-%d"),
        "time": now.strftime("%H:%M:%S"),
        "day_of_week": now.strftime("%A"),
        "formatted": now.strftime("%A, %B %d, %Y at %I:%M %p")
    }


# Define the root agent
root_agent = Agent(
    name="assistant_agent",
    model="gemini-2.0-flash",
    description="A helpful assistant that can check weather, do calculations, and tell time.",
    instruction="""You are a friendly and helpful assistant. You have access to the following tools:

1. **get_weather**: Use this to check the weather in any city.
2. **calculate**: Use this to perform mathematical calculations.
3. **get_current_time**: Use this to get the current date and time.

Always be polite and helpful. When using tools, explain what you're doing.
If a user asks something you can't help with, politely let them know.
""",
    tools=[get_weather, calculate, get_current_time]
)
